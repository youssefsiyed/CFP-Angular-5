export interface Schedulling {
talks : { 
        id: number,
    event: string,
    lang: string,
    title: string,
    mainSpeaker: string,
    otherSpeakers: string[],
    talkType: {
        id: number,
        label: string, 
    },
    audienceLevel: string,
    summary: string,
    privateMessage: string,
    state: {
        code: string
    },
    sponsorTalk: boolean,
    track: {
         id: number,
        label: string,
    },
    demoLevel: string,
    preferences: string
    },
slots : {
    id: number,
    name: string,
    day: string,
    from: number,
    to: number,
    room: {
        id: string,
        name: string,
        capacity: number,
        setup: string,
        recorded: string
          }
    }

  }