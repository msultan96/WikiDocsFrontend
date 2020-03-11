import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CloudServicesConfig } from 'src/app/editor/common-interfaces';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/user';


const LOCAL_STORAGE_KEY = 'CKEDITOR_CS_CONFIG';

@Component( {
	selector: 'app-create-article',
	templateUrl: './create-article.component.html',
	styleUrls: [ './create-article.component.css' ]
} )
export class CreateArticleComponent {
	@ViewChild( 'form') public form?: NgForm;
	public configurationSet = true;
	public channelId = this.handleDocIdInUrl();
	public config = getStoredConfig();
	public isWarning = false;

	public name:string = sessionStorage.getItem("user")["name"];

	constructor(private userService:UserService){}

	ngOnInit(){
		this.handleSubmit();
	}


	public handleSubmit() {
		if ( !this.form || !this.form.valid ) {
			return;
		}

		if ( this.isCloudServicesTokenEndpoint() && !this.config.tokenUrl.includes( '?' ) ) {
			this.isWarning = true;
			return;
		}

		storeConfig( {
			tokenUrl: getRawTokenUrl( this.config.tokenUrl ),
			uploadUrl: this.config.uploadUrl,
			webSocketUrl: this.config.webSocketUrl
		} );

		updateDocIdInUrl( this.channelId );

		this.configurationSet = true;
	}

	public handleTokenUrlChange() {
		this.isWarning = false;
	}

	public isCloudServicesTokenEndpoint() {
		return isCloudServicesTokenEndpoint( this.config.tokenUrl );
	}

	public onEditorReady( editor ) {
		console.log( 'Editor is ready to use!', editor );
	}

	public handleDocIdInUrl() {
		let id = getDocIdFromUrl();
	
		if ( !id ) {
			id = randomString();
			updateDocIdInUrl( id );
		}
		let articleCreator:string = JSON.parse(sessionStorage.getItem("user"))["email"];
		this.userService.createNewArticle(articleCreator, id).subscribe(
			response => {
			  console.log(response);
			});

		return id;
	}
}



function getDocIdFromUrl() {
	const channelIdMatch = location.search.match( /channelId=(.+)$/ );

	return channelIdMatch ? decodeURIComponent( channelIdMatch[ 1 ] ) : null;
}

function randomString() {
	return Math.floor( Math.random() * Math.pow( 2, 52 ) ).toString( 32 );
}

function storeConfig( csConfig: CloudServicesConfig ) {
	localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( csConfig ) );
}

function updateDocIdInUrl( id: string ) {
	window.history.replaceState( {}, document.title, generateUrlWithDocId( id ) );
}

function generateUrlWithDocId( id: string ) {
	return `${ window.location.href.split( '?' )[ 0 ] }?channelId=${ id }`;
}

function getRawTokenUrl( url: string ) {
	if ( isCloudServicesTokenEndpoint( url ) ) {
		return url.split( '?' )[ 0 ];
	}

	return url;
}

function isCloudServicesTokenEndpoint( tokenUrl: string ) {
	return /cke-cs[\w-]*\.com\/token\/dev/.test( tokenUrl );
}

function getStoredConfig(): CloudServicesConfig {
	const config = JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY ) || '{}' );

	return {
		tokenUrl: 'https://67460.cke-cs.com/token/dev/ymvTJiejxmJbQErL6QcpuAW5DiZKJXZbsDpnonhcWcw8lDskAtDchUs3398G',
		uploadUrl: 'https://67460.cke-cs.com/easyimage/upload/',
		webSocketUrl: '67460.cke-cs.com/ws'
	};
}
