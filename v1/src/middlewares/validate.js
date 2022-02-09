
const validate = (schema) => (req, res, next) => {


    const { value, error } = schema.validate(req.body)

    if (error) {
        //error.details=[{message:""},{message:""}]

        const errorMessage = error.details?.map(detail => detail.message).join(", ")

        //["","","",]=>""aaa,bbb,ccc

    }

}