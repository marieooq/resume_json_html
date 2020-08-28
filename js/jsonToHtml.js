$(function () {
  fetch('../resume.json')
    .then((response) => response.json())
    .then((data) => {
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

  contact.forEach((val, index) => {
    const title = val.itemTitle;
    const content = val.itemContent;

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
      $('.contact-left .contact-ul').append(li);
    } else {
      const span = $('<span>', { text: content });
      li.append(span);
      $('.contact-right .contact-ul').append(li);
    }
  });
}

/**
 * display a summary section
 * @param {object} summary
 */
function displaySummarySection(summary) {
  if (!summary) return;
  const title = summary.title;
  const content = summary.content;

  $('.summary h2').text(title);
  $('.summary p').text(content);
}

/**
 * display a work experience section
 * @param {object} work_experience
 */
function displayWorkExperienceSection(workExperience) {
  if (!workExperience) return;
  const title = workExperience.title;
  $('.work-experience h2').text(title);

  const careers = workExperience.career;

  careers.forEach((careerVal) => {
    const jobTitle = careerVal.title;
    if (careerVal.title) {
      const jobTitle = careerVal.title;
      const h3 = $('<h3>', { text: jobTitle });
      $('.career').append(h3);
    }

    if (careerVal.companyDescription) {
      const companyDescription = careerVal.companyDescription;
      const h4 = $('<h4>', { text: companyDescription });
      $('.career').append(h4);
    }

    if (careerVal.achievements) {
      const ul = $('<ul>', { class: 'career-ul' });
      const achievements = careerVal.achievements;

      achievements.forEach((achievementsVal) => {
        const li = $('<li>', { text: achievementsVal });
        ul.append(li);
      });

      $('.career').append(ul);
    }
  });
}

/**
 * display a projects section
 * @param {object} projects
 */
function displayProjectsSection(projects) {
  if (!projects) return;

  const title = projects.title;
  $('.projects h2').text(title);

  if (projects.projectList) {
    const projectList = projects.projectList;

    projectList.forEach((val) => {
      const project = $('<div>', { class: 'project' });
      const projectName = val.projectName;
      const projectUrl = val.projectUrl;
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
    });
  }
}

/**
 * display a education section
 * @param {object} education
 */
function displayEducationSection(education) {
  if (!education) return;
  const title = education.title;
  $('.education h2').text(title);

  const educationalBackground = education.EducationalBackground;

  educationalBackground.forEach((val) => {
    const major = val.major;
    const description = ` ${val.description}`;
    const h3 = $('<h3>');
    const span = $('<span>', { text: major });
    h3.append(span, description);
    $('.education').append(h3);
  });
}
