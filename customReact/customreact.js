function customRender(Element, Container) {
    const domElement = document.createElement(Element.type)
    domElement.innerHTML = Element.customMessage
    // domElement.setAttribute('href',Element.props.href)
    // domElement.setAttribute('target',Element.props.target)

    for (const prop in reactElement.props) {
        if (prop === 'children') continue 
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    Container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    customMessage:'Google'
}


const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)