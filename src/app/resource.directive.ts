import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Directive({
  selector: '[appResource]'
})
export class ResourceDirective implements OnInit {

  @Input('appResource') key: string;

  constructor(
    private el: ElementRef,
    private translationService: TranslationService) { }

  ngOnInit() {
    this.el.nativeElement.innerText = this.translationService.getResource("en-GB", this.key);  
  }
}
