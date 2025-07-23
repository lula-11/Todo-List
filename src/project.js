function saveProject(projects){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function getProjects() {
      let projects = JSON.parse(localStorage.getItem('projects')) || [];
      if (projects.length === 0) {
        projects = [{ id: 1, project: 'Project1' }];
        saveProject(projects);
      }
      return projects;
    }

function addProject(){
    let projectValue = document.querySelector("#project").value;

    let projects = getProjects();
    let newProject = {
        id: projects.length ? projects[projects.length - 1].id + 1 : 1, // 自增 ID
        project: projectValue
    };
    projects.push(newProject);
    saveProject(projects);

    updateProjectOption(projectValue);
}


function updateProjectOption(projectValue){
    let select = document.getElementById('projects');
    let projects = getProjects();
    select.innerHTML = projects.map(project => `<option value="${project.project}">${project.project}</option>`).join('');
    select.value = projectValue;
    setH(projectValue);
}


function setH(projectValue){
    const h = document.querySelector("h1");
    h.textContent = `${projectValue}`;
}

export {saveProject, getProjects, addProject, updateProjectOption, setH}
