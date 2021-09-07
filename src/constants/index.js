export const DEFAULT_PROFILE_IMG = "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png"
export const DEFAULT_PROFILE_NAME = "Anonymous user"

export const DEFAULT_COMMENTS = [
    {
        id: 1,
        name: 'user 1',
        description: 'hello world, description',
        img: '',
        replies: [
            {
                id: 2,
                name: 'user 2',
                description: 'hello world, nested level 1, description',
                img: '',
                replies: [
                    {
                        id: 5,
                        name: 'user 1',
                        description: 'hello world, nested level 3, description',
                        img: '',
                        replies: [
                            {
                                id: 6,
                                name: 'user 2',
                                description: 'hello world, nested level 4, description',
                                img: '',
                                replies: [
                
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'user 1',
        description: 'hello world, description',
        img: '',
        replies: [
            {
                id: 4,
                name: 'user 2',
                description: 'hello world, nested level 1, description',
                img: '',
                replies: [

                ]
            }
        ]
    }
]

export const MARGIN_LEFT = 50