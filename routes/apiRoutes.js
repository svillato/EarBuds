
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports = app => {
    app.post("/api/post", function (req, res) {
        Item.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    app.get("/api/items", function (req, res) {
        Item
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })


      app.get("/api/get/:id", function (req, res){
        Item.findById(req.params.id, function(req,body){
            console.log(body);
            res.send(body);
        })

    })

    app.post("/api/update/:id", function (req, res){
        // var query = {'_id':req.params.id};
        // req.newData.username = req.params.id;
        // Item.findOneAndUpdate(query,)


        var query = { '_id': req.params.id};
        Item.findOneAndUpdate(query, { transcription: 'Eunji' }, function(){
            console.log("Updating!");
        });
        res.send(true);
        
    

    })


    ///////********** */
app.post("/api/transcribe", (req, res) => {

    console.log("Transcribing!");
    // Imports the Google Cloud client libraries
  const Storage = require('@google-cloud/storage');
  const speech = require('@google-cloud/speech');
  
  // Creates clients for storage and speech
  const storage = new Storage();
  const client = new speech.SpeechClient();
  
  
  // For now manually enter the name of the file name we will test that is already in ./resources/
  // Currently expecting file is already a mono wav file
  let audioFileName = 'sos.wav';
  
  //Assign const values
  // Set the google storage bucket
  const bucketName = 'eearbudsstorage';
  // Manually set aud
  let filename = './resources/' + audioFileName;
  
  ///--------------------------------//
  //  Setup for the longRunningRecognize speech function call
  
  //build the URI for the file uploaded above
  const gcsUri = 'gs://' +  bucketName + '/' + audioFileName;
  // const encoding = 'Eencoding of the audio file, e.g. LINEAR16';
  // const sampleRateHertz = 16000;
  const languageCode = 'en-US';
  
  const config = {
      //encoding: encoding,
      //sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
    };
    
    const audio = {
      uri: gcsUri,
    };
    
    const request = {
      config: config,
      audio: audio,
    };
  
  //  End setup for the longRunningRecognize speech function call
  ///--------------------------------//
  
  
  
  
  
  // Performs the actual upload to the storage bucket specified by "bucketName" const above
  storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
      console.log(`${filename} uploaded to ${bucketName}.`);
      // After upload is complete, now call the longRunningRecognize function
      client
          .longRunningRecognize(request)
          .then(data => {
          const operation = data[0];
          // Get a Promise representation of the final result of the job
          return operation.promise();
          })
          .then(data => {
          const response = data[0];
          const transcription = response.results
              .map(result => result.alternatives[0].transcript)
              .join('\n');
          console.log(`Transcription: ${transcription}`);
          //console.log(response);
          })
          .catch(err => {
          console.error('ERROR:', err);
          });
      ////////
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  
    
  
    
  
    res.send(true);
  });
  //////////************ */
    
}
