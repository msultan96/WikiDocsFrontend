import { Component } from '@angular/core';
import { ArticleService } from '../service/article.service.js';

@Component( {
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.css' ]
} )
export class EditorComponent {

	constructor(private articleService:ArticleService){}

	ngOnInit(){}
}
