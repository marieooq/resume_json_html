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
  const left = $('<div>', { class: 'contact_left' });
  const left_ul = $('<ul>', { class: 'contact_ul' });

  const right = $('<div>', { class: 'contact_right' });
  const right_ul = $('<ul>', { class: 'contact_ul' });

  for (let i = 0; i < contact.length; i++) {
    const title = contact[i].item_title;
    const content = contact[i].item_content;

    const li = $('<li>', { text: `${title} - ` });

    if (i < 3) {
      const span = $('<span>');
      const a = $('<a>', {
        text: content,
        href: content,
        target: '_blank',
      });

      span.append(a);
      li.append(span);
      left_ul.append(li);
    } else {
      const span = $('<span>', { text: content });
      li.append(span);
      right_ul.append(li);
    }
  }

  left.append(left_ul);
  right.append(right_ul);

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
function displayWorkExperienceSection(work_experience) {
  if (!work_experience) return;
  const title = work_experience.title;
  const h2 = $('<h2>', { text: title });
  $('.work_experience').append(h2);

  const careers = work_experience.career;

  for (let i = 0; i < careers.length; i++) {
    const div = $('<div>', { class: 'career' });

    if (careers[i].title) {
      const job_title = careers[i].title;
      const h3 = $('<h3>', { text: job_title });
      div.append(h3);
    }
    if (careers[i].company_description) {
      const company_description = careers[i].company_description;
      const h4 = $('<h4>', { text: company_description });
      div.append(h4);
    }

    if (careers[i].achievements) {
      const ul = $('<ul>', { class: 'career_ul' });
      const achievements = careers[i].achievements;

      for (let j = 0; j < achievements.length; j++) {
        const achievement = achievements[j];
        const li = $('<li>', { text: achievement });
        ul.append(li);
      }
      div.append(ul);
    }

    $('.work_experience').append(div);
  }
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
    const project_list = projects.project_list;
    for (let i = 0; i < project_list.length; i++) {
      const project = $('<div>', { class: 'project' });
      const project_name = project_list[i].project_name;
      const project_url = project_list[i].project_url;
      const description = project_list[i].description;

      const h3 = $('<h3>', { text: project_name });

      const span = $('<span>');
      const a = $('<a>', {
        text: `  ${project_url}`,
        href: project_url,
        target: '_blank',
      });

      const p = $('<p>', { text: description });

      span.append(a);
      h3.append(span);
      project.append(h3, p);
      $('.projects').append(project);
    }
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

  const educational_background = education.educational_background;

  for (let i = 0; i < educational_background.length; i++) {
    const major = educational_background[i].major;
    const description = ` ${educational_background[i].description}`;
    const h3 = $('<h3>');
    const span = $('<span>', { text: major });
    h3.append(span, description);
    $('.education').append(h3);
  }
}

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
