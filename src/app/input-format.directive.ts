import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appInputFormat]'
})
export class InputFormatDirective {

	@Input('appInputFormat')
	format: string;

	
	constructor(private el: ElementRef) {

	}

	@HostListener('focus')
	onFocus() {
		console.log('on Focus');
	}

	@HostListener('blur')
	onBlur() {
		console.log('On Blur');

		let value: String = this.el.nativeElement.value;
		if (this.format == 'lowercase')
			this.el.nativeElement.value = value.toLowerCase()
		else
			this.el.nativeElement.value = value.toUpperCase();
	}

}
