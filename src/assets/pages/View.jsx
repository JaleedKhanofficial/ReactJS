                email:res.data.email,
            });
        });
    }

    return (
        <div>
            <h3>View User</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>User Name</h4>
                        <p>{inputs.name}</p>
                        <h4>User Email</h4>
                        <p>{inputs.email}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}