import { Component, OnInit } from '@angular/core';
import { ICompany } from './models/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular25';

  ngOnInit() {

    const school = {
      name: 'Hillel',
      executive: 'Misha',
      courses: [
          {
              id: 10,
              courseName: 'Javascript basic',
              price: 5400, 
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
          },
          {
              id: 12,
              courseName: 'Javascript Pro',
              price: 6400,
              description: 'In November 1996, Netscape submitted JavaScript to ECMA International to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape'
          },
          {
              id: 2,
              courseName: 'Python',
              price: 6400,
              description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.'
          },
          {
              id: 54,
              courseName: 'Php',
              price: 5400,
              description: 'PHP: Hypertext Preprocessor is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.'
          }
      ]
  }

    enum SCHOOL {
      JAVASCRIPT_BASIC = 'Javascript basic',
      JAVASCRIPT_PRO = 'Javascript Pro',
      PYTHON = 'Python',
      PHP = 'Python',
    }

    const randomFn = (from, to) => {
      return Math.floor(Math.random() * (to - from)) + from;
    };

    const rand = randomFn(0, 4);

    const main = document.getElementById('main');
    const ul = document.createElement('ul');
    main.append(ul);

    const id = document.createElement('li');
    id.innerHTML = `ID: ${school.courses[rand].id}`;
    ul.append(id);

    const name = document.createElement('li');
    name.innerHTML = `Course name: ${school.courses[rand].courseName}`;
    ul.append(name);

    const price = document.createElement('li');
    price.innerHTML = `Price: ${school.courses[rand].price}`;
    ul.append(price);

    ul.onclick = () => {
      const description = document.createElement('li');
      description.innerHTML = `Description: ${school.courses[rand].description}`;
      ul.append(description);
    };

    // 2) Здесь вспоминаем основы и всплытие)!
    // var t = 32;
    // function calc() {
    //     t = 3;
    //     console.log(t);
    //     return 21;
    //     var t = 12;
    // }
    // calc();
    // console.log(t);// почему 32 а не 3??
    // Ответ: мы же используем новый стандарт))
    // из-за того что переменная var t = 12; объявляется внутри ф-ци calc
    // она всплывает на верх этой ф-ции и поэтому t = 3; считается как объявление новой переменно внутри ф-ции
  }
}

class Company implements ICompany {
  public readonly company: any = {
      name: 'GlobalLogic',
      personnel: 4000,
      rating: 3
  }; // протипизировать company!
  constructor() {
  }
  getCompanyName() {
      return this.company.name;
  }
  getCompanyPersonnel() {
      return this.company.personnel;
  }
}