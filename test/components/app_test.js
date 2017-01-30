import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('displays a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('displays a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

  // it('displays a comment in the list once posted', () => {
  //   component.find('.comment-box textarea').simulate('change', 'new comment');
  //   component.find('.comment-box button').simulate('click');
  //
  //   expect(component.find('.comment-list ul li')).to.have.value('new comment');
  // });
});
