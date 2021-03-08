const boards = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" id="board-view">Pinterest</a>
  <a class="nav-link" href="#" id="toggle-pin-form">Create Pin</a>
  <a class="nav-link" href="#" id="toggle-board-form">Create Board</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div class="navbar-nav w-100">
    <div id="logoutButton" class="ml-auto"></div>
    </div>
</div>
</nav>
<h1 class="home-title" id="home-title">Boards</h1>`;
  document.querySelector('#login-form-container').innerHTML = domString;
};

export default boards;
