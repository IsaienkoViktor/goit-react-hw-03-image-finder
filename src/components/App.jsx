import { getImages } from '../Service/ImageApi.js';
import { Component } from 'react';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      getImages(query, page).then(({ photos, total_results }) => {
        console.log(photos);
        this.setState(prevState => ({
          images: [...prevState.images, ...photos],
          showBtn: page < Math.ceil(total_results / 15),
        }));
      });
    }
  }

  handelSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      showBtn: false,
    });
  };
  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <form>
        <input type="text" />
        <button>search</button>
      </form>
    );
  }
}
