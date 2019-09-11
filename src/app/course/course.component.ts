import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'course',
	// create a pipe and regsiter in module...
	template: `
		{{blog | summary : 100}}
	`,
})
export class CourseComponent {
	blog = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. A scelerisque purus semper eget duis at tellus at urna. Odio ut enim blandit volutpat maecenas. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.`
}
