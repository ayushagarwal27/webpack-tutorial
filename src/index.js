import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render();

const helloWorldBtn = new HelloWorldButton();
helloWorldBtn.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production Mode');
} else {
    console.log('Developement Mode');
}

helloas();
