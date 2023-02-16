export interface IProjects{
    message:String,
    projects:[{
        _id:String
        name: String,
        reason:String,
        type: String,
        division: String,
        category: String,
        priority: Number,
        department: String,
        start_date: Date,
        end_date: Date,
        location: String,
        status: String,
    }],
    pages:String
}
