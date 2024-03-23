import {Component} from 'react';
import {generateImage} from '../../api';

interface P {}

interface S {
  isLoading: boolean;
  imageUrl: string;
  isOpen: boolean;
}

export default class CreateController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      isLoading: false,
      imageUrl: '',
      isOpen: false,
    };
  }

  handleGenerateImage = async () => {
    try {
      const description = 'A colorful landscape with mountains and a lake.';
      this.setState({isLoading: true});
      const image = await generateImage(description);
      this.setState({isLoading: false});
      if (image) {
        this.setState({isOpen: true});
        console.log('image', image);
      }
    } catch (error) {
      console.log('error', error);
      this.setState({isLoading: false});
    }
  };
}
