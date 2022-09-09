export default function UnitCard(props) {
  console.log(props);

  let imageSource = `${process.env.PUBLIC_URL}/Defender-images/${props.selectedUnitData.imageSource}`;
  if (props.isAttacker) {
    imageSource = `${process.env.PUBLIC_URL}/Attacker-images/${props.selectedUnitData.imageSource}`;
  }

  let cardTitle = "Defender";
  if (props.isAttacker) {
    cardTitle = "Attacker";
  }

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div className="p-3">
        <h2 class="card-title">{cardTitle}</h2>
      </div>

      <figure class="px-10 pt-10">
        <img src={imageSource} width={150} alt="Shoes" class="rounded-xl" />
      </figure>

      <div class="card-body items-left text-center flex flex-col justify-between">
        <div className="unitcard-inputs">
          <input
            type="number"
            placeholder="Enter Input Health"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Is veteran?</span>
              <input
                type="checkbox"
                checked={props.isVeteran}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          {props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Is it boosted?</span>
                <input
                  type="checkbox"
                  checked={props.isBoosted}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}

          {!props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Is it poisioned?</span>
                <input
                  type="checkbox"
                  checked={props.isBoosted}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
          {!props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Defense bonus?</span>
                <input
                  type="checkbox"
                  checked={props.isBoosted}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
          {!props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">City wall?</span>
                <input
                  type="checkbox"
                  checked={props.isBoosted}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
        </div>
        <div className="unitcard-button">
          <div class="card-actions">
            <button class="btn btn-primary" onClick={() => props.setModalPopup(!props.modalPopup)}>Select Unit</button>
            <label htmlFor="my-modal" className="btn modal-button">open modal</label>
          </div>
        </div>
      </div>
    </div>
  );
}
