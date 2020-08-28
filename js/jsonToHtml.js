$(function () {
  $.getJSON('../resume.json', function (data) {
    //display a title
    displayTitle(data.title);

    // display a contact section
    displayContactSection(data.contact);

    //display a summary section
    displaySummarySection(data.summary);

    //display a work experience section
    displayWorkExperienceSection(data.work_experience);

    //display a projects section
    displayProjectsSection(data.projects);

    //display an education section
    displayEducationSection(data.education);
  });
});

/**
 * display a title of a resume
 * @param {string} title
 */
function displayTitle(title) {
  if (!title) return;
  $('#title').append(title);
}

/**
 * display a contact section
 * @param {object} contact
 */
function displayContactSection(contact) {
  if (!contact) return;
  const left = $('<div>', { class: 'contact-left' });
  const leftUl = $('<ul>', { class: 'contact-ul' });

  const right = $('<div>', { class: 'contact_right' });
  const rightUl = $('<ul>', { class: 'contact-ul' });

  contact.forEach((val, index)=> {
    const title = val.item_title;
    const content = val.item_content;

    const li = $('<li>', { text: `${title} - ` });

    if (index < 3) {
      const span = $('<span>');
      const a = $('<a>', {
        text: content,
        href: content,
        target: '_blank',
      });

      span.append(a);
      li.append(span);
      leftUl.append(li);
    } else {
      const span = $('<span>', { text: content });
      li.append(span);
      rightUl.append(li);
    }
  })

  left.append(leftUl);
  right.append(rightUl);

  $('.contact').append(left, right);
}

/**
 * display a summary section
 * @param {object} summary
 */
function displaySummarySection(summary) {
  if (!summary) return;
  const title = summary.title;
  const content = summary.content;
  const h2 = $('<h2>', { text: title });
  const p = $('<p>', { text: content });
  $('.summary').append(h2, p);
}

/**
 * display a work experience section
 * @param {object} work_experience
 */
function displayWorkExperienceSection(workExperience) {
  if (!workExperience) return;
  const title = workExperience.title;
  const h2 = $('<h2>', { text: title });
  $('.work-experience').append(h2);

  const careers = workExperience.career;

  careers.forEach(careerVal =>{
    const div = $('<div>', { class: 'career' });

    if (careerVal.title) {
      const jobTitle = careerVal.title;
      const h3 = $('<h3>', { text: jobTitle });
      div.append(h3);
    }
    if (careerVal.company_description) {
      const companyDescription = careerVal.company_description;
      const h4 = $('<h4>', { text: companyDescription });
      div.append(h4);
    }

    if (careerVal.achievements) {
      const ul = $('<ul>', { class: 'career-ul' });
      const achievements = careerVal.achievements;

      achievements.forEach(achievementsVal => {
        const li = $('<li>', { text: achievementsVal });
        ul.append(li);
      })

      div.append(ul);
    }

    $('.work-experience').append(div);
  })
}

/**
 * display a projects section
 * @param {object} projects
 */
function displayProjectsSection(projects) {
  if (!projects) return;
  if (projects.title) {
    const title = projects.title;
    const h2 = $('<h2>', { text: title });
    $('.projects').append(h2);
  }

  if (projects.project_list) {
    const projectList = projects.project_list;

    projectList.forEach(val => {
      const project = $('<div>', { class: 'project' });
      const projectName = val.project_name;
      const projectUrl = val.project_url;
      const description = val.description;

      const h3 = $('<h3>', { text: projectName });

      const span = $('<span>');
      const a = $('<a>', {
        text: `  ${projectUrl}`,
        href: projectUrl,
        target: '_blank',
      });

      const p = $('<p>', { text: description });

      span.append(a);
      h3.append(span);
      project.append(h3, p);
      $('.projects').append(project);
    })
  }
}

/**
 * display a education section
 * @param {object} education
 */
function displayEducationSection(education) {
  if (!education) return;
  const title = education.title;
  const h2 = $('<h2>', { text: title });
  $('.education').append(h2);

  const educationalBackground = education.educational_background;

  educationalBackground.forEach(val => {
    const major = val.major;
    const description = ` ${val.description}`;
    const h3 = $('<h3>');
    const span = $('<span>', { text: major });
    h3.append(span, description);
    $('.education').append(h3);
  })
}