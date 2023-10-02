import { Component } from '@angular/core';
import { Product } from 'src/app/models/bundle.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent {
  tasks: Product[] = [];

  newTask: Product = {
    id :0,
    title:'',
    description:'',
    photoUrl: '',
    price:'',
    rating:'',
  };

  constructor(private consumeService: DataService) { }

private getAllSources(): void {
  this.consumeService.getBundles().subscribe(
    (res: any) => {
      console.log(res);
      this.tasks = res;
    },
    (error) => {
      console.error(error);
    }
  );
  };

  ngOnInit(): void {
    this.getAllSources();
  }
}
