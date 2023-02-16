export interface IChart{
    message: String,
    data:[{
        _id: string,
        registered_count: number,
        closed_count: number
    }]
}