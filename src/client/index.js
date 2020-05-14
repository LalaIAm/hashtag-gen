import './styles/reset.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/results.scss';

import { handleSubmit } from './js/formHandler';
import { processResults, createHashtags, updateTitle, displaySentiment } from './js/updateUI';


export { handleSubmit, processResults, createHashtags, updateTitle, displaySentiment };
