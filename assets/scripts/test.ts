import { _decorator, Collider2D, Component, EPhysics2DDrawFlags, EventTouch, Graphics, MouseJoint2D, Node, PhysicsSystem2D, RigidBody2D, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    @property(Node)
    mouseJoint: Node = null;

    start() {
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All;

        //after 3s turn off mouse joint
        this.scheduleOnce(() => {
            console.log("destroyed!!");


            this.mouseJoint.getComponent(MouseJoint2D).destroy();
            this.mouseJoint.destroy();
        }, 3);
    }


}

