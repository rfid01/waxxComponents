//waxxComponents
customElements.define('waxx-div',class extends HTMLElement{
  constructor(eleName) {
    super();
    //创建页面DIV元素
    let waxxShow = this.attachShadow({mode:'open'});
    let dvObj = document.createElement("div");
    dvObj.style.width = this.getAttribute("width") ? this.getAttribute("width") : "100%";
    dvObj.style.height = this.getAttribute("height") ? this.getAttribute("height") : "30px";
    dvObj.style.lineHeight = this.getAttribute("line-height") ? this.getAttribute("line-height") : "30px";
    dvObj.style.border = this.getAttribute("border")? this.getAttribute("border"):"1px solid green";
    dvObj.style.borderRadius = this.getAttribute("borderRadius") ? this.getAttribute("borderRadius"):"12px";
    dvObj.innerHTML = this.getAttribute("content");
    waxxShow.appendChild(dvObj);
  }
  createButton(){
    return 123;
  }

});

//创建按钮
customElements.define('waxx-button',class extends HTMLElement{
  constructor(){
    super();
      let waxxShow = this.attachShadow({mode:'open'});
      let waxxButton = document.createElement("button");
      waxxButton.style.width = this.getAttribute("width") ? this.getAttribute("width") : "100%";
      waxxButton.style.height = this.getAttribute("height") ? this.getAttribute("height") : "30px";
      waxxButton.style.lineHeight = this.getAttribute("line-height") ? this.getAttribute("line-height") : "30px";
      waxxButton.style.border = this.getAttribute("border")? this.getAttribute("border"):"0px solid green";
      waxxButton.style.borderRadius = this.getAttribute("borderRadius") ? this.getAttribute("borderRadius"):"12px";
      waxxButton.style.background = this.getAttribute("background")?this.getAttribute("background") : '#0000ff';
      waxxButton.style.color = this.getAttribute("color")?this.getAttribute("color") : '#ffffff';
      waxxButton.style.fontSize = this.getAttribute("fontSize")?this.getAttribute("fontSize") : '12px';
      waxxButton.innerHTML = this.getAttribute("content");
      waxxShow.appendChild(waxxButton);
  }
})

//创建Input输入框
customElements.define('waxx-input',class extends HTMLElement{
  constructor(){
    super();
      let waxxShow = this.attachShadow({mode:'open'});
      let waxxInput = document.createElement("input");
      waxxInput.setAttribute("type",this.getAttribute("type")?this.getAttribute("type"):"text");
      waxxInput.setAttribute("name",this.getAttribute("name")?this.getAttribute("name"):"");
      waxxInput.setAttribute("placeholder",this.getAttribute("placeholder")?this.getAttribute("placeholder"):"");
      waxxInput.style.width = this.getAttribute("width") ? this.getAttribute("width") : "100%";
      waxxInput.style.height = this.getAttribute("height") ? this.getAttribute("height") : "30px";     
      waxxInput.style.lineHeight = this.getAttribute("line-height") ? this.getAttribute("line-height") : "30px";
      waxxInput.style.border = this.getAttribute("border")? this.getAttribute("border"):"1px solid green";
      waxxInput.style.borderRadius = this.getAttribute("borderRadius") ? this.getAttribute("borderRadius"):"12px";
      waxxInput.style.background = this.getAttribute("background")?this.getAttribute("background") : '#f5f5f5';
      waxxInput.style.color = this.getAttribute("color")?this.getAttribute("color") : '#000000';
      waxxInput.style.fontSize = this.getAttribute("fontSize")?this.getAttribute("fontSize") : '12px';

      waxxInput.value = this.getAttribute("value");
      waxxShow.appendChild(waxxInput);
  }
})
