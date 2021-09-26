//Creating the first Div element
var div1=document.createElement("div");
div1.id="f_div";
document.body.appendChild(div1);

//creating heading 
var head=document.createElement('h1');
head.id="h1";
head.innerHTML="GIT  REPO'S SEARCH";
div1.appendChild(head);


// creating input tag
var input = document.createElement('input');
input.type='text';
input.id='name';
input.size='100';
input.placeholder='Enter valid GitHub user name';
div1.appendChild(input);

//creating a br tag
var br=document.createElement('br');
div1.appendChild(br);
var br=document.createElement('br');
div1.appendChild(br);

//creating a serach button
var search=document.createElement("button");
search.id='btn';
search.type='button';
search.innerHTML="Search";
div1.appendChild(search);

//creating second div element
var div2=document.createElement("div");
div2.id='s_div';
document.body.appendChild(div2);

//creating third div element
var div3=document.createElement("div");
div3.id="t_div";
document.body.appendChild(div3);

//Function to get Fetched Data
async function repo() {
    let user = input.value
    input.value = ''
    div2.innerHTML = ''
    div3.innerHTML = ''

    const response = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await response.json();
    console.log(data)
    if(data.length===0){
        alert("Enter Valid user name")
    }
    else{
    appendData(data,user)
    }
}

//Function to append Fetched Data
function appendData(data,user) {
//Creating a image tag for Avatar
    const img = document.createElement('img')
    const git_url = document.createElement('a')
    img.src = data[0].owner.avatar_url
    div2.appendChild(img)

    for (let i = 0; i < data.length; i++) {
        const repo_url = document.createElement('a')
        const fork_counts = document.createElement('h3')
        const stargazers_counts = document.createElement('h3')
        const languages = document.createElement('h3')
        const names = document.createElement('h3')

        const smallbox = document.createElement('div')
        smallbox.className = 'smallbox'

        repo_url.href = data[i].html_url
        repo_url.innerHTML = `Repo_url: ${repo_url.href}`
        fork_counts.innerHTML = `Forks count: ${data[i].forks_count}`
        stargazers_counts.innerHTML =`Stars: ${data[i].stargazers_count}` 
        languages.innerHTML = `Language: ${data[i].language}`
        names.innerHTML = `Name: ${data[i].name}`

        smallbox.appendChild(names)
        smallbox.appendChild(languages)
        smallbox.appendChild(fork_counts)
        smallbox.appendChild(stargazers_counts)
        smallbox.appendChild(repo_url)

        div3.appendChild(smallbox)

    }

    document.body.appendChild(div3)


}



search.addEventListener('click', repo)
