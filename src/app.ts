class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
      //now for typecasting:
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    //ts assumes this is of type DocumentFragment
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
  }
}
