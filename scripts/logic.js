function result(row,col){
    for(var rows=0 ; rows<9 ; rows++)
    {
        for(var cols =0 ; cols<9 ; cols++)
        {
            if((rows==rows+1 && rows==rows+2) || (cols==cols+3 || cols==cols+6) ||(rows==cols) || (rows==cols+1))
            {
                return true;
            }
        }
    }

    return false;
}