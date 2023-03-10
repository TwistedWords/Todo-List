import { Component } from '@angular/core';
import { Line } from "./Line";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isInputVisible = false;

  lines : Line[] = [];
  newLine :string;

  saveLine(){
    if(this.newLine){
      let line = new Line();
      line.name = this.newLine;
      line.isChecked = false;
      this.lines.push(line);
      this.newLine = '';
    }else{
      alert('Please insert text')
    }
  }

  complete(id: number) {
    this.lines[id].isChecked = !this.lines[id].isChecked;
  }

  remove(id: number) {
    if (this.lines[id].isChecked) {
      this.lines = this.lines.filter((v, i) => i !== id)
    } else {
      alert('Please check the task before deleting')
    }
  }

}
