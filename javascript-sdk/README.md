
# Screevo Transcription SDK v1.0.8

Screevo is the AI-powered platform to optimize, manage and supervise your speech-related services, making them more cost-efficient and hassle-free.


## Speech Transcription

Speech Transcription is a service for getting text from an audio file


## Installation

Using npm

```bash
  $ npm install transcription-sdk
```
    
## Constructor

```javascript  
const { Transcription } = require("transcription-sdk");
// - or -
// import { Transcription } from "transcription-sdk";

const transcription = new Transcription(TRANSCRPTION_API_KEY);

```


## Examples

In our app:

```javascript
import { Transcription } from 'transcription-sdk';

const apiKey = 'TRANSCRIPTION_API_KEY';

const transcription = new Transcription(apiKey);


//Create object data
var data = {
  file: audiofile,
  languageCode: 'en-US'
}

//Call transcription service
var result = await transcription.services.transcription(data);

```

Output:

```json
{
  "transcription":"And so my fellow American ask not what your country can do for you, ask what you can do for your country."
}

```


## Support

For support, email info@screevo.ai


![Logo](https://screevo.ai/wp-content/uploads/2022/02/LOGO-Screevo-hi-400x70.png)

