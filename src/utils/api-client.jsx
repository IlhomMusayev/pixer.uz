import apiURL from '../config/constants'

function client(
    endpoint,
    { data, token, headers: customHeaders, method, ...customConfig } = {}
) {
    const config = {
        method: method,
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            'Content-Type': data ? 'application/json' : undefined,
            ...customHeaders,
        },
        ...customConfig,
    }

    return window
        .fetch(`${apiURL.API_URL}/${endpoint}`, config)
        .then(async (response) => {
            console.log(response)
            if (response.status === 401) {
                await window.localStorage.removeItem("token")
                window.location.assign('/')
            }
            else if (response.status === 403) {
                await window.localStorage.removeItem("token")
                window.location.assign('/')
            }
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return Promise.reject(data)
            }

        })
}

export { client }