
describe('HTTP req ', () => {

    it('get req', () => {
        let data = []
        cy.request({
            method: 'GET',
            url: '{{endpoint}}}}',

            headers: {
                "Content-Type": "application/json",
                "Authorization": "{{auth}}"
            }
        }).then((body) => {
            // console.log(body.body[45])
            data.push(body)
            const value = body[body.length - 1]
            console.log(value)



        })

    })
})


