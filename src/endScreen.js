

function endScreen(winner){
    
    const currentBody = document.body;
    currentBody.innerHTML = '';

    const end_container = document.createElement('div');
    end_container.classList.add('end-container');


    const end_title_container = document.createElement('div');
    end_title_container.classList.add('end_title_container');

    const title = document.createElement('div');
    title.classList.add('end-title');
    title.textContent = `The Winner is ${winner}`

    end_title_container.appendChild(title);

    const end_btn = document.createElement('button');
    end_btn.classList.add('end-btn');
    end_btn.textContent = "restart"

    const end_btn_container = document.createElement('div');
    end_btn_container.classList.add('end-btn-container');

    end_btn_container.appendChild(end_btn);

    end_container.appendChild(end_title_container);

    currentBody.appendChild(end_container);
}

export default endScreen;