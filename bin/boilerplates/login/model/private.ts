

export const loginFx = attachWrapper({
    effect: requestFx,
    mapParams: (payload: LoginFxPayload) => ({
        method: Method.post,
        body: payload,
        url: '/auth/login',
    }),
    mapResult: ({ result }: { result: AxiosResponse<LoginFxResponse> }) => result.data,
    mapError: ({ error }: { error: AxiosError }) => error.response?.data as LoginFxError
})

export const fetchProfileDataFx = attachWrapper({
    effect: authRequestFx, // Обратите внимание, здесь используется эффект authRequest, в котором подмешивается токен
    mapParams: () => {
        return {
            method: Method.get,
            url: '/user/profile',
        }
    },
    mapResult: ({ result }: { result: AxiosResponse<AuthDataFxResponse> }) => result.data,
    mapError: ({ error }: { error: AxiosError }) => error.response?.data
})