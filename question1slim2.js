addiForm.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('slim.php/addForm', {
      method: 'POST',
      body: new FormData(addiForm)
    });

    let result = await response.json();

    alert('Click the Participants button to check');
};

delForm.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('slim.php/deleteForm', {
      method: 'POST',
      body: new FormData(delForm)
    });

    let result = await response.json();

    alert('Click the Participants button to check');
};