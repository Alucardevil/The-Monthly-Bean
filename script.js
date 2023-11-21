document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    document.body.appendChild(header);

    const logo = new Image();
    logo.src = 'The Bean of the Month.png';
    logo.alt = 'The Monthly Bean Logo';
    header.appendChild(logo);

    const menu = document.createElement('nav');
    const menuList = document.createElement('ul');
    ['Home', 'About', 'Contact'].forEach(text => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = text;
        listItem.appendChild(link);
        menuList.appendChild(listItem);

        listItem.onmouseover = () => {
            listItem.style.backgroundColor = 'blue';
            link.style.color = 'red';
        };
        listItem.onmouseout = () => {
            listItem.style.backgroundColor = '';
            link.style.color = '';
        };
    });
    menu.appendChild(menuList);
    header.appendChild(menu);

    const main = document.createElement('main');
    ['Basic', 'Premium', 'Gold'].forEach(subscription => {
        const section = document.createElement('section');
        const heading = document.createElement('h2');
        heading.textContent = `${subscription} Subscription`;
        section.appendChild(heading);

        section.style.padding = '20px';
        section.style.margin = '10px 0';

        section.onmouseover = () => {
            section.style.backgroundColor = 'blue';
            section.style.color = 'white';
        };
        section.onmouseout = () => {
            section.style.backgroundColor = '';
            section.style.color = '';
        };

        main.appendChild(section);
    });
    document.body.appendChild(main);

    const footer = document.createElement('footer');
    footer.textContent = '© 2023 The Monthly Bean';
    document.body.appendChild(footer);

    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.backgroundColor = 'gray';
    header.style.color = 'white';
    header.style.padding = '10px 20px';
    logo.style.height = '50px';

    menuList.style.listStyle = 'none';
    menuList.style.display = 'flex';
    menuList.style.padding = '0';
    menuList.style.marginLeft = '20px';
    Array.from(menuList.children).forEach(item => {
        item.style.marginRight = '20px';
    });

    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.alignItems = 'center';

    footer.style.backgroundColor = '#deb887';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px 0';
});
