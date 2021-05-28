(function ($) {
  // Dom da element ve Class yaratimi
  const body = getElement('body');

  function generateTodoList(parentTag) {
    const container = element('div', { className: 'container' });
    const listBlock = element('div', { className: 'listBlock' });
    const search = element('div', { className: 'search' });
    const actionBlock = element('div', { className: 'actionBlock'});
    const list = element('ul', { className: "list" });
    const li = element('li');
    const main = element('div')
    const section = element('section');
    const btn = element('button', {innerText: 'Add',
    className: "btn",style: {
        color: "blue"
      }
    });
    // btn.innerText = 'Add';
    // btn.className = 'btn';
    // btn.style.color = 'blue';
  
    const searchInput = element('input', { className: 'search',
      type: 'search'
    }); 
  
    const actionBlockInput = element('input', {
      placeholder: 'write something here',
      type: 'text'
    });
  
  
    icineEkle(parentTag, main); 
    icineEkle(main, section); // main.appendChild(section);
    
    icineEkle(
      section,
      element('header', {
        innerHTML: '<h1>To-Do-List</h1>'
      }),
      container
    ) // section.appendChild(); 
    // header.innerHTML = '<h1>To-Do-List</h1>'; //strong elementi yaratiladabilir.
  
    icineEkle(container, listBlock, search, actionBlock);
    icineEkle(listBlock, icineEkle(list, li));
    // icineEkle(list, li);
    icineEkle(search, searchInput); 
    icineEkle(actionBlock, actionBlockInput, btn);
  }

  generateTodoList('#lik');
  generateTodoList('#iki'); // 2 farkli main yarattik

  const sonList = element('section', { className: 'layout', id: "#sonPortuk" });
  icineEkle(body, sonList);
  generateTodoList(sonList);
})(document)

console.log(document)