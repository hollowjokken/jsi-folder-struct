const folders = {
  type: 'dir',
  name: 'start',
  children: [
    {
      type: 'dir',
      name: 'app',
      children: [
        {
          type: 'file',
          name: 'index.html'
        },
        {
          type: 'dir',
          name: 'js',
          children: [
            {
              type: 'file',
              name: 'main.js'
            },
            {
              type: 'file',
              name: 'app.js'
            },
            {
              type: 'file',
              name: 'misc.js'
            },
            {
              type: 'dir',
              name: 'vendor',
              children: [
                {
                  type: 'file',
                  name: 'jquery.js'
                },
                {
                  type: 'file',
                  name: 'underscore.js'
                }
              ]
            }
          ]
        },
        {
          type: 'dir',
          name: 'css',
          children: [
            {
              type: 'file',
              name: 'reset.css'
            },
            {
              type: 'file',
              name: 'main.css'
            }
          ]
        }
      ]
    }
  ]
};



function tomberon (folders) {

  var auxList="";
  var x= document.getElementById("folder-container");

  auxList+="<ul id='widget'>";
  auxList+="<li class='folder-item'>" + "folder:" + folders.name + "</il>";
    for (var i = 0; i < folders.children.length; i++) {
      if (folders.children[i].type === 'file') {
        auxList+="<li class='file-item'>" + "file:" + folders.children[i].name +  "</li>";
      }
      else if (folders.children[i].type === 'dir') {
        auxList += tomberon(folders.children[i]);
      }
    }
  auxList+="</ul>";
  return x.innerHTML=auxList;
}


function filter(str, folders) {

  var auxList="";
  var x = document.getElementById("folder-container");

  if(folders.type === "dir" && folders.name.match(str) != null) {
    auxList = tomberon(folders);
  }
  else {
    if (folders.type === "dir" && (folders.name.match(str)) !== null)
      auxList += "<li class='folder-item'>" + "folder:" + folders.name + "</il>";
    for (var i = 0; i < folders.children.length; i++) {
      if (folders.children[i].type === 'dir') {
        auxList += filter(str, folders.children[i]);
      }
      else if (folders.children[i].type === 'file') {
        if ((folders.children[i].name.match(str)) != null) {
          auxList += "<li class='file-item'>" + folders.children[i].name + "</li>";
        }
      }
    }
  }
  return x.innerHTML = auxList;
}


function start() {

  var input = document.getElementById("input").value;

  console.log(input);
  filter(input,folders);
}


tomberon(folders);

