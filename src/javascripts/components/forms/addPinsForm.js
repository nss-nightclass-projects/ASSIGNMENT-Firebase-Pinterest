import firebase from 'firebase/app';
import 'firebase/auth';
import selectBoard from './selectBoard';

const addPinsForm = () => {
  document.querySelector('#add-pin-form').innerHTML = `
  <form>
    <div class="form-group">
      <label for="pinTitle">Pin's Title</label>
      <input type="text" class="form-control" id="pinTitle" aria-describedby="title">
    </div>
    <div class="form-group">
      <label for="pinContent">Pin content</label>
      <textarea type="text" class="form-control" id="pinContent"></textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="pinUrl">
    </div>
    <div id="select-board" class="form-group"></div>
    <small id="contentHelp" class="form-text text-muted">Select a Board</small>
    <button type="submit" class="btn btn-primary" id="submit-pin">Submit</button>
  </form>`;
  selectBoard(firebase.auth().currentUser.uid);
};

export default addPinsForm;
