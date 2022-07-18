export const VisibilityControl = ({setShowList, isChecked, tTabla}) => {
    return(
        <div className="row bg-secondary text-center p-2 border-secondary mt-3">
            <div className="col form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setShowList(e.target.checked)}
                ></input>{" "}
                
            </div>
            <div className="col-7 d-flex justify-content-begin">
                <label>Mostrar {tTabla}</label>
            </div>
        </div>
    );
}