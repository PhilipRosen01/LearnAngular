import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
import { Content } from '../helper-files/content-interface'

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newContentEvent = new EventEmitter<Content>();
  newMusicItem!: Content;
  itemCreated: boolean = true;

  addContentToList(author: string, imgUrl: string, type: string, title: string, body: string, tags: [string]) :void{

        let itemCreate = true;
        this.newMusicItem = {
        author:author,
        imgUrl:imgUrl,
        type:type,
        title: title,
        body: body,
        tags: tags
        }

        this.newContentEvent.emit(this.newMusicItem)


    }

}
