/*
 *  Song specificiation for Alt Jazz song Lament 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Lament"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            //"Lament": [ "Flute" ], 
        },
        "English Horn": {
            //"Lament": [ "English Horn in F" ], 
        },
        "Bass Clarinet": {
            //"Lament": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            //"Lament": [ "Voice" ],
        },
        "Drums": {
            //"Lament": [ "Drums" ], 
        },
        "Violin I": {
            "Lament": [ "Violin I" ], 
        },
        "Violin II": {
            "Lament": [ "Violin II" ], 
        },
        "Viola": {
            "Lament": [ "Viola" ], 
        },
        "'Cello": {
            "Lament": [ "'Cello" ],
        },
        "Bass": {
            "Lament": [ "Bass" ], 
        }
    },

    songs: {

        "Lament": {
            metadata: { 
                title: "Lament",
                composer: "Elaine Paul",
                arranger: "Elaine Paul",
                genre: "Classical",
                bpm: '60bpm',
                key: "B Minor"
            },
            baseUrl: 'http://ali-cia.net/altjazz/scores/', 
            pdfSubdir: "/",
            fileLocation: "lament",
            filePrefix: "lament-",
            parts: {
                //"Flute": { fileSuffix: "Flute" },
                //"English Horn in F": { fileSuffix: "English-Horn-in-F" },
                //"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
                //"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                //"Bassoon": { fileSuffix: "Bassoon" },
                //"Trumpet in Bb": { fileSuffix: "Trumpet-in-Bb" },
                //"Horn in F": { fileSuffix: "Horn-in-F" },
                //"Trombone": { fileSuffix: "Trombone" },
                //"Clave": { fileSuffix: "Clave" },
                //"Piano": { fileSuffix: "Piano" },
                //"Voice": { fileSuffix: "Voice" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "'Cello": { fileSuffix: "Cello" },
                //"Bass": { fileSuffix: "Bass" },
            },
            scores: {
                //"Rhythm": { fileSuffix: "Rhythm" },
                //"Condensed Score": { fileSuffix: "Condensed-Score" },
                "Score Transposed": { fileSuffix: "Score-Transposed" },
                //"Score Concert": { fileSuffix: "Score-Concert" },
                //"Lead Sheet": { fileSuffix: "Lead-Sheet" },
            },
            recordings: {
                demo: {
                    description: 'MIDI rererence for tracking (3 + 3/4 bars out front), on SoundCloud',
                    url: 'https://soundcloud.com/david-elaine-alt/lament-midi'
                },
                reference: {
                    description: 'MIDI rererence for tracking (3 + 3/4 bars out front), on Google Drive',
                    url: 'https://drive.google.com/open?id=1guVq5wokpR059BbDVLa47UvLIGkxFcul'
                },
                reading: {
                    description: 'reading',
                    url: ''
                },
                recording: {
                    description: 'recording',
                    url: ''
                },
                live: {
                    description: 'live',
                    url: ''
                }
            }
        }
    }
};