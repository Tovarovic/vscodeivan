package com.Conciliacion.Conciliacion;

import com.Conciliacion.Movimiento.MovimientoBBVA;
import com.Conciliacion.Movimiento.MovimientoPayway;

public class ResultadoConciliacion {
    
    private final MovimientoPayway movimientoPayway;
    private final MovimientoBBVA movimientoBBVA;
    private final EstadoConciliacion estadoConciliacion;
    private final String observacion;
    
    public ResultadoConciliacion(MovimientoPayway movimientoPayway, MovimientoBBVA movimientoBBVA,
            EstadoConciliacion estadoConciliacion, String observacion) {
        this.movimientoPayway = movimientoPayway;
        this.movimientoBBVA = movimientoBBVA;
        this.estadoConciliacion = estadoConciliacion;
        this.observacion = observacion;
    }

    public MovimientoPayway getMovimientoPayway() { return movimientoPayway; }
    public MovimientoBBVA getMovimientoBBVA() { return movimientoBBVA; }
    public EstadoConciliacion getEstadoConciliacion() { return estadoConciliacion; }
    public String getObservacion() { return observacion; }

}
