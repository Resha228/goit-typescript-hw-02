/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class NamePage  {
  title;
}

class Component <T>{
  constructor (public props:T) {

  }
}

class Page extends Component<NamePage> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};