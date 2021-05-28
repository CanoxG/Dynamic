// Functionlari Parca Parca yarat ne yapmasini istiyorsan

const $ = document;

function element(tag, attributes) {
  const el = $.createElement(tag);

  if (attributes) {
      const {
          className,
          innerText,
          style,
          type,
          placeholder,
          innerHTML,
          id
      } = attributes;

      if (className) {
          el.className = className; 
      }
      if (innerText) {
          el.innerText = innerText;
      }
      if (style) {
          el.style = style;
      }
      if (type) {
          el.type = type;
      }
      if (placeholder) {
          el.placeholder = placeholder;
      }
      if (innerHTML) {
          el.innerHTML = innerHTML;
      }
      if (id) {
          el.id = id;
      }
  }

  return el;
}

function getElement(key) {
  return $.querySelector(key);
}

function icineEkle(el, ...childs) {
  let selectedElement = el; // reassing olmasin diye bos bir kutu yarattik 

  if (typeof selectedElement === 'string') { // domda elemente bakiyoruz
      selectedElement = getElement(el);   // varsa al diyoruz   
      if (!selectedElement) {     // elementi bulamaz ise             
        selectedElement = element('main', { id: el }); // yaratip body nin icine ekliyoruz 
        icineEkle($.body, selectedElement);
      }
  }  

  childs.forEach((child) => {
      selectedElement.appendChild(child); //
  });

  return el; // ekledigimiz elmeenti geri dondurucek
             // icerisine child eklememiz icin
}