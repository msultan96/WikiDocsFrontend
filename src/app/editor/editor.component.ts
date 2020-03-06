import { AfterViewInit, OnDestroy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditorBuild from '../../../vendor/ckeditor5/build/classic-editor-with-real-time-collaboration.js';
import { CloudServicesConfig } from './common-interfaces';

@Component( {
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.css' ]
} )
export class EditorComponent implements AfterViewInit, OnDestroy {
	@Input() public configuration!: CloudServicesConfig;
	@Input() public channelId!: string;
	@Output() public ready = new EventEmitter<CKEditor5.Editor>();
	@ViewChild( 'presenceList', { static: true } as any ) private presenceListContainer?: ElementRef<HTMLDivElement>;

	public Editor = ClassicEditorBuild;
	public editor?: CKEditor5.Editor;

	public data = this.getInitialData();

	public get editorConfig() {
		return {
			cloudServices: {
				...this.configuration
			},
			collaboration: {
				channelId: this.channelId
			},
			presenceList: {
				container: this.presenceList,
			}
		};
	}

	// Note that Angular refs can be used once the view is initialized so we need to create
	// these containers and use in the above editor configuration to workaround this problem.

	private presenceList = document.createElement( 'div' );
	private boundCheckPendingActions = this.checkPendingActions.bind( this );

	public ngAfterViewInit() {
		if (!this.presenceListContainer ) {
			throw new Error( 'Div containers for presence list were not found' );
		}
		this.presenceListContainer.nativeElement.appendChild( this.presenceList );
	}

	public ngOnDestroy() {
		window.removeEventListener( 'beforeunload', this.boundCheckPendingActions );
	}

	public onReady( editor: CKEditor5.Editor ) {
		this.editor = editor;
		this.ready.emit( editor );

		// Prevent closing the tab when any action is pending.
		window.addEventListener( 'beforeunload', this.boundCheckPendingActions );

	}

	private checkPendingActions( domEvt ) {
		if ( this.editor.plugins.get( 'PendingActions' ).hasAny ) {
			domEvt.preventDefault();
			domEvt.returnValue = true;
		}
	}

	private getInitialData() {
<<<<<<< HEAD
		return `
	
`;
=======
		return ``;
>>>>>>> EditingHTMLPage
	}
}
