import Stream from './Stream';
import { shallow } from 'enzyme';

describe('Stream', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }, {title: 'z'}],
  };

  it('shows two elementss', () => {
    const element = shallow(<Stream { ...props } />);

    expect(element.find('.track')).to.have.length(3);
  });

});
