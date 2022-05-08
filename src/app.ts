class ProjectInput {
  templateElement: HTMLTemplateElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
      //now for typecasting:
    )! as HTMLTemplateElement;
  }
}
