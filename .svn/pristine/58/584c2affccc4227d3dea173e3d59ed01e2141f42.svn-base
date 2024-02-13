import { Component, EventEmitter, Output } from '@angular/core';
import { SiteService } from '../../site.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  
  @Output('onChange') event = new EventEmitter<string>();

  value:any = "";

  constructor(
    private http: HttpClient, private router: Router, private route: ActivatedRoute, public site:SiteService,
  ) {
    
  }


  // функция для загрузки содержимого страницы
  async loadPage(url:any) {
    const response = await fetch(url);
    if (response.ok) {
      return response.text();
    }
    throw new Error(`Failed to load page ${url}`);
  }
  
  // функция для поиска текста на странице
  searchPage(pageContent:any, search:any) {
    return pageContent.includes(search);
  }
  
  // основная функция для сканирования страниц
  async searchWebsite(search:any, pages:any) {
    for (const page of pages) {
      const pageContent = await this.loadPage(page);
      if (this.searchPage(pageContent, search)) {
        console.log(`Page ${page} contains "${search}"`);
        // здесь можно сделать что-то еще, например, добавить ссылку на найденную страницу в список результатов
      }
    }
  }
  
  // запускаем сканирование сайта
  

  onChange(event:any){

    var value = event.target.value;

    if(value == "")
      return;

    var pages:any = [
      "/services/escort/hotel",
    ];
    this.searchWebsite(value, pages);

    /*
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'text/json');
    let url = "/services/escort/hotel";
    this.http.get<any[]>(url, {headers: headers}).subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    });
    */
    this.event.emit(event.target.value);
  }
}
