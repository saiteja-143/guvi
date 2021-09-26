

//Creating a div element
var div=document.createElement("div");
div.setAttribute('id','f_div');
document.body.appendChild(div);
//creating a form tag
var form=document.createElement("form");
form.setAttribute('id','myform')
div.appendChild(form);

//creating label tag
var label=document.createElement('label');
label.setAttribute('for','name');
label.setAttribute('id','lbl')
label.innerHTML="GIT  REPO'S SEARCH"
form.appendChild(label);


//creating br tag

var br=document.createElement('br');
form.appendChild(br);


// var br=document.createElement('br');
// form.appendChild(br);


// var br=document.createElement('br');
// form.appendChild(br);


// creating input tag
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id','name');
input.setAttribute('size','100');
input.setAttribute('placeholder','Enter valid GitHub user name')
form.appendChild(input);




// var br=document.createElement('br');
// div.appendChild(br);


// var br=document.createElement('br');
// div.appendChild(br);

// var br=document.createElement('br');
// div.appendChild(br);

//creating a serach button
var search=document.createElement("button");
search.setAttribute('type','button');
search.setAttribute('onclick','getuser()')
search.setAttribute('id','btn');
search.innerHTML="Search";
div.appendChild(search);

//creating second div element
var div2=document.createElement("div");
div2.setAttribute('id','s_div');
 
document.body.appendChild(div2);

//creating third div element
var div3=document.createElement("div");
div3.id="t_div";
document.body.appendChild(div3);



//getting data from input tag and processing it ,to get user repos
async function repo() {

    let user = input.value
    input.value = ''

    div2.innerHTML = ''
    div3.innerHTML = ''

    const response = await fetch(`https://api.github.com/users/${user}/repos`)

    const data = await response.json();

    console.log(data)
  if(data.length===0){
   alert("Enter Valid Username")
  }
 else{
  appendData(data)
  }

}



function appendData(data) {

    const total_repos = document.createElement('h1')

    total_repos.innerHTML = `Total Repos : ${data.length}`

    div3.appendChild(total_repos)
    document.body.appendChild(div3)

    const img = document.createElement('img')
    const git_url = document.createElement('a')

    img.src = data[0].owner.avatar_url

    div3.appendChild(img)



    for (let i = 0; i < data.length; i++) {

        const repo_url = document.createElement('a')
        const fork_counts = document.createElement('h5')
        const stargazers_counts = document.createElement('h5')
        const languages = document.createElement('h4')
        const names = document.createElement('h3')

        const smallbox = document.createElement('div')
        smallbox.className = 'smallbox'

        repo_url.href = data[i].html_url
        repo_url.innerHTML = 'Repo_URL'
        fork_counts.innerHTML = `Forks count: ${data[i].forks_count}`
        stargazers_counts.innerHTML =`Stars: ${data[i].stargazers_count}` 
        languages.innerHTML = `Language: ${data[i].language}`
        names.innerHTML = `Name: ${data[i].name}`

        smallbox.appendChild(names)
        smallbox.appendChild(languages)
        smallbox.appendChild(fork_counts)
        smallbox.appendChild(stargazers_counts)
        smallbox.appendChild(repo_url)

        div2.appendChild(smallbox)

    }

    document.body.appendChild(div2)


}



search.addEventListener('click', repo)
