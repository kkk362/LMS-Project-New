import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ApproveDeny() {
  return (
    <>
    <div><h1> Approve Deny Leave </h1></div>
    <Form>

    <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Employee ID</label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="10001"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Employee Name </label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Rakesh Sharma"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Leave Balance </label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="20"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Start Date</label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="10/08/2022"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">End Date</label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="20/08/2022"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Number of days </label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="10"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Leave Type </label>
    <div class="col-sm-2">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Earned Leave"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-3 col-form-label">Reason  </label>
    <div class="col-sm-5">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Not Feeling Well"/>
    </div>
  </div>

    <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label><h5>Comments</h5></Form.Label>
        <Form.Control placeholder=" Here will be manager's comment" />
      </Form.Group>
     

    <Button  as="input" type="button" value="Approve" />{' '}
    <Button  as="input" type="submit" value="Deny" />{' '}
    <Button  as="input" type="submit" value="Cancel" />{' '}
    </Form>
    </>
   
  )
}
